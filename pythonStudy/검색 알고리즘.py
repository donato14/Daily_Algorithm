# x = [[1,2,3], [4,5,6]]
# y = x.copy()
# print(x)
# print(y)
# x[0][1] = 9
# print(x)
# print(y)

# print()

# import copy

# x=[[1,2,3],[4,5,6]]
# y = copy.deepcopy(x)
# x[0][1] = 7
# print(x)
# print(y)

from typing import Any, Sequence

def seq_search(a: Sequence, key: Any) -> int:
  i = 0
  while True:
    if i == len(a):
      return -1
    if a[i] == key:
      return i 
    i += 1
# search 함수

print('실수를 검색합니다')
print('주의: "End"를 입력하면 종료합니다.')

number = 0
x = []

while True:
  s = input(f'x[{number}]:')
  if s == 'End':
    break
  x.append(float(s))
  number += 1

ky = float(input('검색할 값을 입력하세여.: '))

idx = seq_search(x, ky)
if idx == -1:
  print('검색값을 갖는 원소가 존재하지 않습니다')
else:
  print(f'검색값은 x[{idx}]에 있습니다.')