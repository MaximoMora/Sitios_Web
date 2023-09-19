

def binary(lista,target):
    max = len(lista)
    min = lista[0]
    mid = lista[len(lista)]
    while target != mid:
        mid = (max + min) / 2
        if target > mid:
            min = lista[+1]
            