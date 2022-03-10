#1157
# import collections
# from typing import Collection
# sentence = list(input().upper())
# print(sentence)
# a = collections.Counter(sentence)
# max_key = max(a, key = a.get)
# if (max_key.__len__() > 1) :
#   print("?")
# else:
#   print(max_key)

# words = input().upper()
# unique_words = list(set(words))

# cnt_list = []
# for x in unique_words :
#     cnt = words.count(x)
#     cnt_list.append(cnt)

# if cnt_list.count(max(cnt_list)) > 1 :
#     print('?')
# else :
#     max_index = cnt_list.index(max(cnt_list))
#     print(unique_words[max_index])

#1152
# import collections
# sentence = input()
# sentence_word_list = sentence.split()
# a = (collections.Counter(sentence_word_list))

# print(sum(a.values()))

#2908
# a = [1,2,3,4]
# a.reverse()

# print(a)

a, b = map(list,input().split())

a.reverse()
b.reverse()

a = int(''.join(a))
b = int(''.join(b))

if (a>b) :
  print(a)
else :
  print(b)

