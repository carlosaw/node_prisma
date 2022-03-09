import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany({});// Limpa usuarios
  await prisma.post.deleteMany({});// Limpa posts

  // Cria usuário
  const user = await prisma.user.create({
    data: {
      email: 'carlos@gmail.com',
      name: 'Carlos',
      age: 90
    }
  });
  // Cria post baseado no usuário
  const post = await prisma.post.create({
    data: {
      title: 'Post de Teste criado via seed',
      body: 'Este é um post de teste...',
      authorId: user.id
    }
  });
}

main();