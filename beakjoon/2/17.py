#1110
#시간초과
# q = input()
# num = q
# cnt = 0

# while True:
#   if (int(num) < 10):
#     num='0'+str(num)
#   add = str(int(num[0]) + int(num[1]))
#   num = num[-1] + add[-1]
#   cnt += 1
#   if num == q:
#     print(cnt)
#     break
# 정답
# q = int(input())
# num = q
# cnt = 0

# while True:
#   a = num // 10
#   b = num % 10
#   c = (a + b) % 10
#   num = (b * 10) + c

#   cnt += 1
#   if(num == q):
#     break
# print(cnt)

#10818
# a = int(input())
# arr = list(map(int, input().split()))
# arr.sort()
# max = arr[a-1]
# min = arr[0]
# print(min, max)

#2562
# arr = []
# for i in range(9):
#   a = int(input())
#   arr.append(a)

# maxNum = max(arr)
# index = arr.index(maxNum)

# print(maxNum)
# print(index+1)

#2577
# a = int(input())
# b = int(input())
# c = int(input())

# result = a*b*c

# for i in range(10):
#   print(str(result).count(str(i)))

#3052
a=set()

for i in range(1,11):
  b = int(input())
  result = b%42
  a.add(result)

print(len(a))