export const HELP = [
  {
    CMD: 'cd',
    TEXT: 'Change directory',
    CONTENT: '현재 작업 디렉터리의 위치를 바꾸는 명령어입니다.',
    EXAMPLE: 'cd ../home',
    ICON: '🚪',
    EXPLAINMENT:
      '상위의 home 으로 이동합니다.\n../ => 상위 디렉토리 이동\n./ => 현재 디렉토리 이동\n',
  },
  {
    CMD: 'clear',
    TEXT: 'Clear terminal',
    CONTENT: '터미널을 깨끗하게 지웁니다.',
    EXAMPLE: 'clear',
    ICON: '🧹',
  },
  {
    CMD: 'cp',
    TEXT: 'Copy file',
    CONTENT: '파일을 복사하는 명령어입니다.',
    EXAMPLE: 'cp file1 file2',
    ICON: '📝',
    EXPLAINMENT:
      'file1을 file2로 복사합니다.\n👉 cp ../file1 ../file2 는 무엇일까요?',
  },
  {
    CMD: 'help',
    TEXT: 'List all commands',
    CONTENT: '도움이 필요하면 한번 쳐보세요. 이곳에서 기다릴게요 :)',
    EXAMPLE: 'help',
    ICON: '🤗',
  },
  {
    CMD: 'mkdir',
    TEXT: 'Create directory',
    CONTENT: '디렉터리를 생성합니다.',
    EXAMPLE: 'mkdir directory',
    ICON: '📂',
    EXPLAINMENT:
      'mkdir directory1 directory2\n => 공백으로 여러개의 디렉터리를 생성할 수 있습니다.\n👉 mkdir ../dir 은 무엇일까요??',
  },
  {
    CMD: 'mv',
    TEXT: 'Move file',
    CONTENT: '파일을 이동합니다.',
    EXAMPLE: 'mv file1 file2',
    ICON: '🚚',
    EXPLAINMENT:
      'file1을 file2로 이동합니다.\n👉 mv ../file1 ../file2 는 무엇일까요?',
  },
  {
    CMD: 'pwd',
    TEXT: 'Print working directory',
    CONTENT: '현재 작업 디렉터리의 위치를 출력합니다.',
    EXAMPLE: 'pwd',
    ICON: '📌',
    EXPLAINMENT: '여러분은 지금 어디에 있나요?',
  },
  {
    CMD: 'rm',
    TEXT: 'Remove file',
    CONTENT: '파일을 삭제합니다.',
    EXAMPLE: 'rm file',
    ICON: '🗑',
    EXPLAINMENT:
      'rm file1 file2\n => 공백으로 여러개의 파일을 삭제할 수 있습니다.\n👉 rm -rf directory 는 무엇일까요?',
  },
  {
    CMD: 'touch',
    TEXT: 'Create file',
    CONTENT: '파일을 생성합니다.',
    EXAMPLE: 'touch file',
    ICON: '📄',
    EXPLAINMENT:
      'touch file1 file2\n => 공백으로 여러개의 파일을 생성할 수 있습니다.\n👉 touch ../file 은 무엇일까요?',
  },
];
