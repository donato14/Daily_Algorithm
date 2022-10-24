# num = int(input())
# hansu = 0

# for n in range(1, num+1) :
#     if n <= 99 : # 1부터 99까지는 모두 한수
#         hansu += 1 
    
#     else :     
#         nums = list(map(int, str(n))) # 숫자를 자릿수대로 분리 
#         if nums[0] - nums[1] == nums[1] - nums[2] : #등차수열 확인
#             hansu+=1
# print(hansu)

#11654
# word = input()
# print(ord(word))

#11720
# num = int(input())
# num2 = list(map(int,input()))
# if (num2.__len__() > num):
#   print('다시 입력하세요')
# else:
#   print(sum(num2));

#10809
# word = input()
# alphabet = list(range(97,123))

# for i in alphabet:
#   print(word.find(chr(i)),end=' ')

#2675

# word = list(input())

# length = word.__len__()

# for i in range(2, length):
#   print(word[i]*int(word[0]),end='')

#2675_문자열 반복
T = int(input())

for _ in range(T):
    R, S = list(map(str, input().split()))
    R = int(R)

    for i in S:
        print(R*i, end='')
    print()