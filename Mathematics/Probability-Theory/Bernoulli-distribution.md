A Bernoulli distribution is a discrete probability distribution modeling a possibly biased coin flip (i.e. a coin flip where heads, associated with the value 1, has probability $p \in [0,1]$).

\\[
\Pr(X=x) = \begin{cases}\phi &amp; x=1 \\\  1-\phi &amp; x=0\end{cases}
\\]

This can be written in a single expression as

\\[
\Pr(X=x) = \phi^x (1-\phi)^{1-x},\quad x \in \\{0,1\\}
\\]

When $x=0$, the first term is a 1 and the second term is $1-\phi$. Likewise, when $x=1$ the first term is a $\phi$ and the second term is a 1.

The Bernoulli distribution is part of the exponential family:

\\[
\Pr(X=x; \phi) = \exp( x \log \phi + (1-x) \log(1-\phi))
\\]