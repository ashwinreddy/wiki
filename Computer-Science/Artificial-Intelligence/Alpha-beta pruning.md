**Alpha-beta pruning**

```python
def minimax(node, depth, isMaximizingPlayer, alpha, beta):
    if node.leaf:
        return node.value
    
    if isMaximizingPlayer :
        bestVal = -float('inf')
        for children:
            value = minimax(node, depth+1, false, alpha, beta)
            bestVal = max( bestVal, value) 
            alpha = max( alpha, bestVal)
            if beta <= alpha:
                break
        return bestVal
    else:
        bestVal = +float('inf')
        for children:
            value = minimax(node, depth+1, true, alpha, beta)
            bestVal = min( bestVal, value) 
            beta = min( beta, bestVal)
            if beta <= alpha:
                break
        return bestVal
```