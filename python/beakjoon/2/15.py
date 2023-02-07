#2884
# H, M = map(int, input().split());
# if(H>0 and M-45<0 ):
#   print(H-1, M+15);
# if(H>0 and M-45>0 ):
#   print(H, M-45);
# if(H == 0 and M-45 < 0):
#   print(23, M+15);

# hour, min = map(int,input().split())

# if min >= 45:
#     print(hour, min-45)
# elif hour>0 and min < 45:
#     print(hour-1, min+15)
# else:
#     print(23, min+15)


#2525
# hour, min = map(int,input().split())
# time = int(input())

# hour += time // 60
# min += time % 60

# if min >= 60:
#   hour += 1
#   min -= 60
# if hour>=24:
#   hour -= 24

# print(hour, min)

#2480
# a,b,c = map(int, input().split())

# if (a==b==c):
#   print(10000+(a*1000))
# elif (a==b or a==c):
#   print(1000+(a*100))
# elif (b==c):
#   print(1000+(b*100))
# else:
#   print(max(a,b,c)*100)

#2739
# x = int(input())

# for i in range(1,10):
#   print (f'{x} * {i} = {x*i}')

#10950
time = int(input())
for i in range(time):
  x,y = map(int, input().split())
  print(x+y)