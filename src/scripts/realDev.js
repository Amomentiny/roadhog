import server from '../dev';

// �޸� Ctrl+C ʱ dev server û�������˳�������
process.on('SIGINT', () => {
  process.exit(1);
});

server();
