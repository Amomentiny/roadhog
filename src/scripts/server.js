import server from '../server';

// �޸� Ctrl+C ʱ dev server û�������˳�������
process.on('SIGINT', () => {
  process.exit(1);
});

server();
