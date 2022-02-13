text = ['   + -- + - + -   ',
        '   + --- + - +   ',
        '    + -- + - + -   ',
        '   + - + - + - +   ']

for i in text:
  print(int(i.strip().replace(' ','').replace('+','1').replace('-','0'), 2));


#ord() : 문자 -> 숫자
#chr() : 숫자 -> 문자
for i in text:
  print(chr(int(i.strip().replace(' ','').replace('+','1').replace('-','0'), 2)));


letter = []
for i in text:
  letter.append(chr(int(i.strip().replace(' ','').replace('+','1').replace('-','0'), 2)));

print(''.join(letter));


# print([i for i in range(10) if i % 2 == 0])

# print([f'{i} X {j} = {i*j}' for i in range(2, 10) for j in range(1, 10)])