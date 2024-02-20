import { createServer } from '@mswjs/http-middleware';
import { HttpResponse, http } from 'msw';

export const userGet = http.get('/user', () => {
  return HttpResponse.json({
    nom: 'Doe',
    prenom: 'Hervé',
  });
});

const httpServer = createServer(
  userGet,
)

httpServer.listen(7051);

// eslint-disable-next-line no-console
console.log('API Mock server started at http://localhost:7051');
