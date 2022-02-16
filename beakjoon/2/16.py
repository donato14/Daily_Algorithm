#8393
# A = int(input())
# i = 1
# temp = 0
# for i in range(A+1):
#   temp = temp + i

# print(temp)

#15552
# import sys
# T = int(input())

# for i in range(T):
#   B,C =map(int, sys.stdin.readline().split())
#   print(B+C)

#2741
# N = int(input())

# for i in range(N):
#   print(i+1)

#2742
# N = int(input())

# for i in range(N):
#   print(N-i)
# #2742 /2
# a = int(input())
# for i in range(a , 0 , -1):
#   print(i)

#11021
# import sys
# t = int(input())

# for i in range(t):
#   b,c = map(int, sys.stdin.readline().split())
#   print(f'Case #{i+1}: {b+c}')

# t = int(input())
# for i in range(t):
#   b,c = map(int, input().split())
#   print(f'Case #{i+1}: {b+c}')

#11022
# import sys
# t= int(input())
# for i in range(t):
#   b,c = map(int, sys.stdin.readline().split())
#   print(f'Case #{i+1}: {b} + {c} = {b+c}')

#2438
# n = int(input())
# for i in range(1, n+1):
#   print(f'*'*i)

#2439
# n = int(input())
# for i in range(1,n+1):
#   print(' '*int(n-i)+'*'*i)

#10871
# a, b = map(int, input().split())
# arr = list(map(int, input().split()))
# for i in range(a):
#   if arr[i] < b:
#     print(arr[i], end=" ")

# #10952
# while(True):
#   a, b = map(int, input().split())
#   if (a!=0 or b!=0):
#     print(a+b)
#   elif (a==0 and b==0):
#     break
  
# #10951
# while(True):
#   try:
#     a, b = map(int, input().split())
#     print(a+b)
#   except:
#     break