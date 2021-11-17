import { rest } from 'msw'
// src/mocks/handlers.js
export const handlers = [
  // Handles the GET request to the open weather API
  rest.get('*api.openweathermap.org*', async (req, res, ctx) => {
      //retrieve the data we want to respond with
    const weatherData = await import('../fixtures/weather.json')
    //send it back to the client
    return res(ctx.json(weatherData));
  })
]