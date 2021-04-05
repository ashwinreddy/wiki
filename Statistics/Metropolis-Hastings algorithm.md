The **Metropolis-Hastings algorithm** draws samples from a distribution $p(x)$ when you have an unnormalized distribution $f(x)$ along with a proposal distribution $g(x, \dot)$.

1. Propose state with $y$ according to distribution $g(x, \cdot)$.
2. Accept the proposal with probability $$A(x,y) = \min \left\\{1, \frac{f(y)}{f(x)}\frac{g(y,x)}{g(x,y)} \right\\}.$$
3. If the proposal is accepted, then move the chain to $y$; otherwise, stay at $x$.