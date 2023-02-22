#8퀸 문제 알고리즘 구현하기

pos = [0] * 8               # 각 열에 배치한 퀸의 위치
flag_a = [False] * 8        # 각 행에 퀸을 배치했는지 체크
flag_b = [False] * 15       # 대각선 방향으로 퀸을 배치했는지 체크
flag_c = [False] * 15       # 대각선 방향으로 퀸을 배치했는지 체크

def put() -> None:
  for j in range(8):
    for i in range(8):
      print('◼️' if pos[i] == j else '▫️', end='')
    print()
  print()

# def put() -> None:
#   """각 열에 배치한 퀸의 위치를 출력"""
#   for i in range(8):
#     print(f'{pos[i]:2}', end='')
#   print()

def set(i: int) -> None:
  """i열의 알맞은 위치에 킌을 배치"""
  for j in range(8):
    if(not flag_a[j]                        #j 행에 퀸이 배치되지 않았다면
      and not flag_b[i + j]                 # 대각선 방향으로 퀸이 배치되지 않았다면
      and not flag_c[i - j + 7]):           # 대각선 방향으로 퀸이 배치되지 않았다면
      pos[i] = j                            # 퀸을 j행에 비치
      if i == 7:                            # 모든 열에 퀸을 배치 완료
        put()
      else:
        flag_a[j] = flag_b[i + j] = flag_c[i - j + 7] = True
        set(i + 1)                          # 다음열에 퀸을 배치
        flag_a[j] = flag_b[i + j] = flag_c[i - j + 7] = False

set(0) #0열에 퀸을 배치