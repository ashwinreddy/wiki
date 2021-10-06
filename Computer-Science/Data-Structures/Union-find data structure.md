A **union-find data structure** stores a partition of a set into disjoint subsets.

```python
def makeset(x):
    x.parent = x
    x.rank = 0
    return x

def find(x):
    while x != x.parent:
        x = x.parent
    return x

def union(x, y):
    rank_x  = find(x)
    rank_y = find(y)
    
    if rank_x == rank_y:
        pass # not actually sure what happens here
    elif rank_x > rank_y:
        y.parent = x
    else:
        x.parent = y
    
        
```