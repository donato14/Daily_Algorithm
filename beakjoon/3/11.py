#5622
# word = list(input())

# # print(word)

# # print(len(word))

# for i in range(len(word)):
#   if (word[i] == 'A'):
#     word[i] = 3
#   elif (word[i] == 'B'):
#     word[i] = 3
#   elif (word[i] == 'C'):
#     word[i] = 3
#   elif (word[i] == 'D'):
#     word[i] = 4
#   elif (word[i] == 'E'):
#     word[i] = 4
#   elif (word[i] == 'F'):
#     word[i] = 4
#   elif (word[i] == 'G'):
#     word[i] = 5
#   elif (word[i] == 'H'):
#     word[i] = 5
#   elif (word[i] == 'I'):
#     word[i] = 5
#   elif (word[i] == 'J'):
#     word[i] = 6
#   elif (word[i] == 'K'):
#     word[i] = 6
#   elif (word[i] == 'L'):
#     word[i] = 6
#   elif (word[i] == 'M'):
#     word[i] = 7
#   elif (word[i] == 'N'):
#     word[i] = 7
#   elif (word[i] == 'O'):
#     word[i] = 7
#   elif (word[i] == 'P'):
#     word[i] = 8
#   elif (word[i] == 'Q'):
#     word[i] = 8
#   elif (word[i] == 'R'):
#     word[i] = 8
#   elif (word[i] == 'S'):
#     word[i] = 8
#   elif (word[i] == 'T'):
#     word[i] = 9
#   elif (word[i] == 'U'):
#     word[i] = 9
#   elif (word[i] == 'V'):
#     word[i] = 9
#   elif (word[i] == 'W'):
#     word[i] = 10
#   elif (word[i] == 'X'):
#     word[i] = 10
#   elif (word[i] == 'Y'):
#     word[i] = 10
#   elif (word[i] == 'Z'):
#     word[i] = 10

# print(sum(word))

#2941
word = input()
croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

for i in croatia :
    word = word.replace(i, 'O')
print(len(word))