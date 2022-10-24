#1546
# a = int(input())
# arr = list(map(int, input().split()))

# arr.sort(reverse=True)
# temp = 0
# for i in range(a):
#   temp += arr[i]

# c = ((temp)/a)/arr[0]*100
# print(c)

#8958
# for문 돌리면서 
# case = int(input())

# for j in range(case):
#   a = list(input())
#   score = []

#   # print(a)
#   if (a[0] == 'O'):
#     score.append(1)
#   else:
#     score.append(0)

#   b = len(a)

#   for i in range(1,b):
#     if(a[i] == 'O'):
#       if(a[i-1] != 0):
#         score.append(score[i-1]+1)
#       else:
#         score.append(1)
#     else:
#       score.append(0)

#   # print(score)
#   print(sum(score))

#4344
# 리스트로 받고 sum(list[1~n]) /list[0] == 평균
# for문 돌려서 리스트중에 넘는 갯수 /list[0] ==퍼센트?

# a = (50+50+70+80+100)/5
# print(a)
# print(f'{float(2/5)*100}%')
# print()
# print()
case = int(input())
for i in range(case):
  arr = list(map(int, input().split()))
  # print(arr)
  temp = 0
  for i in range(1, len(arr)):
    temp += arr[i]
    average = temp/arr[0]

  # print(average)
  over = 0
  for i in range(1, len(arr)):
    if (arr[i] > average):
      over += 1

  # print(over)
  # print(arr[0])
  print(f'{float(over/arr[0])*100:.3f}%')
