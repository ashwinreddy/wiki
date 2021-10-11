**Huffman coding** returns a [[prefix code]] $c_1, \dots, c_n$ for an alphabet $a_1, \dots, a_n$ with weights $w_1, \dots, w_n$.

```py
def huffman(f):
    """
    f is an array of frequencies
    """
    
    H = queue(f)
    
    for i in range(1, n+1):
        H.insert(i)
    for k in range(n+1, 2n):
        i = H.deletemin()
        j = H.deletemin()
        
        k = Node(i, j)
        f[k] = f[i] + f[j] 
        H.insert(k)
```

The runtime is $\order{n \log n}$ if we use a [[binary heap]].