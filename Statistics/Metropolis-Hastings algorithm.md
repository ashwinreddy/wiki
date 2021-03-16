The **Metropolis-Hastings algorithm** lets you sample from an unnormalized distribution. Let's say you really want to sample from $p(x)$ and all you have is $f(x)$, which is proportional to it.

1. Propose state with $y$ according to distribution $g(x, \cdot)$.
2. Accept the proposal with probability $$A(x,y) = \min \left\\{1, \frac{f(y)}{f(x)}\frac{g(y,x)}{g(x,y)} \right\\}.$$
3. If the proposal is accepted, then move the chain to $y$; otherwise, stay at $x$.