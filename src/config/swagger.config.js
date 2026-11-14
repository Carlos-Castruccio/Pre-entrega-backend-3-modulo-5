import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'node:fs';
export const openapi = JSON.parse(readFileSync(new URL('../docs/openapi.json', import.meta.url), 'utf8'));
export function setupSwagger(app) {
  app.get('/api/docs/openapi.json', (req, res) => res.json(openapi));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openapi, {
    customSiteTitle: 'ShipNow API — Swagger',
    swaggerOptions: { persistAuthorization: false }
  }));
}
