import Config from '../models/Config.js';

// Función para inicializar el calendario
export async function initCalendar() {
  // Obtener la cantidad actual de días en la base de datos
  const existingDaysCount = await Config.countDocuments();

  // Calcular cuántos días faltan para llegar a 60
  const daysToAdd = 60 - existingDaysCount;
  if (daysToAdd <= 0) {
      console.log('El calendario ya tiene 60 días o más.');
      return;
  }

  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let currentDay = currentDate.getDate();

  let daysCount = 0;

  while (daysCount < daysToAdd) {
      // Obtener la cantidad de días en el mes actual
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Agregar días restantes en el mes actual
      for (let day = currentDay; day <= lastDayOfMonth; day++) {
          await addDay(currentYear, currentMonth + 1, day);
          daysCount++;
          if (daysCount >= daysToAdd) break;
      }

      // Ir al siguiente mes
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      // Reiniciar el día al principio del mes
      currentDay = 1;
  }
}

async function addDay(year, month, day) {
  const config = new Config({
      year,
      month,
      day,
      // Aquí puedes agregar las horas disponibles para cada día
      availableHours: ['11:00', '13:00', '16:00', '18:00', '20:00', '21:45', '23:30']
  });
  await config.save();
}