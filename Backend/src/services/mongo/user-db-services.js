import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

export async function getUsers() {
  try {
      return await User.find();
  } catch (error) {
      throw new Error('Error fetching users from database');
  }
}

export async function getUserBy(id) {
  try {
      // Intenta buscar el usuario por ID
      let user = await User.findById(id);
      
      return user;
  } catch (error) {
      throw new Error('Error fetching user from database');
  }
}

export async function createUser(userData) {
  try {
      // Extraer los datos del usuario del objeto userData
      const { username, password, rol } = userData;

      // Hashear la contraseña antes de crear el usuario
      const hashedPassword = await bcrypt.hash(password, 10);

      // Crear un nuevo objeto de usuario con la contraseña hasheada
      const newUser = new User({
          username,
          password: hashedPassword,
          rol
      });

      // Guardar el nuevo usuario en la base de datos
      await newUser.save();

      // Devolver el nuevo objeto de usuario
      return newUser;
  } catch (error) {
      throw new Error('Error creating user');
  }
}

export async function updateUser(userId, newData) {
  try {
      // Verificar si se proporciona una nueva contraseña y hashearla
      if (newData.password) {
          newData.password = await bcrypt.hash(newData.password, 10);
      }

      // Actualizar el usuario en la base de datos
      const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });

      return updatedUser;
  } catch (error) {
      throw new Error('Error updating user');
  }
}

export async function deleteUser(userId) {
  try {
      // Verificar si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
          return null; // Retorna null si el usuario no se encuentra
      }

      // Eliminar usuario
      await user.deleteOne();

      return user; // Retorna el usuario eliminado
  } catch (error) {
      throw new Error('Error deleting user');
  }
}