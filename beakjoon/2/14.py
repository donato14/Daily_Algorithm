#10430
# A, B, C = map(int,input().split())

# print((A+B)%C);
# print(((A%C) + (B%C))%C);
# print((A*B)%C);
# print(((A%C)*(B%C))%C);

#2588
# from math import floor

# A = int(input());
# B = int(input());

# print(A * (B%10));
# print(A * floor(B%100/10));
# print(A * floor(B/100));
# print(A * B);

#1330
# A, B = map(int, input().split());

# if (A>B) :
#   print('>');
# elif (A<B) :
#   print('<');
# else :
#   print('==');

#9498
# score = int(input());
# if score>=90 :
#   print('A');
# elif score>=80 :
#   print('B');
# elif score>=70 :
#   print('C');
# elif score>=60 :
#   print('D');
# else :
#   print('F');

#2753
# year = int(input());

# if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0) :
#   print('1');
# else :
#   print('0');

#14681
# x = int(input());
# y = int(input());

# if(x>0 and y>0) :
#   print("1");
# elif(x>0 and y<0):
#   print("4");
# elif(x<0 and y>0):
#   print("2");
# elif(x<0 and y<0):
#   print("3");
