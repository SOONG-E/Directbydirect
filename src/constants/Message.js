const ERROR = Object.freeze({
  ENOENT: 'No such file or directory',
  EEXIST: 'File exists',
  ENOTDIR: 'Not a directory',
  EISDIR: 'Is a directory',
  EINVAL: 'Invalid argument',
  USAGE_CP: 'usage: cp source_file target_file',
  EIDENTICAL: 'are identical (not copied).',
});

const MESSAGE = Object.freeze({
  INFORMATION:
    '안녕하세요. 디렉 바이 디렉 입니다. 사용 가능한 명령어는 cp mv mkdir rm touch chmod cd 입니다. 하단에 여행을 시작할 디렉토리 명을 기재해 주세요.',
});

export { ERROR, MESSAGE };
