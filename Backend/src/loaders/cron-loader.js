import cron from 'node-cron';
import { initCalendar } from '../utils/calendar.js';
import Config from '../models/Config.js';

export default function () {
      // Iniciar el calendario al cargar la aplicación y configurar el cron job para actualizarlo
      cron.schedule('0 0 * * *', async () => {
        console.log('Actualizando calendario...');
        // Obtener la fecha actual
        const currentDate = new Date();
        
        // Eliminar los días pasados al actual
        await Config.deleteMany({ year: { $lt: currentDate.getFullYear() } });
        
        await initCalendar();
        console.log('Calendario actualizado.');
    })
}