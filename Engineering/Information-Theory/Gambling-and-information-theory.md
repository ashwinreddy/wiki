Gambling is a special case of investing in the stock market. We will look at the growth rate of investment in a horse race, which we will see is actually related to the entropy of the race.

# Horse Race Problem

There are $m$ horses in the race. The $i$th horse wins with probability $p_i$, and if that horse wins, its payoff is $o_i$ for 1.

The gambler distributes his wealth across all horses. A distribution $b$ describes how he bets. The fraction of the wealth invested in horse $i$ is $b_i$. We concluse that

\begin{equation}
\forall i, b_i \geq 0 \qquad \sum_{i=1}^m b_i = 1
\end{equation}

Thus, $b$ can be thought of as a random variable. 

If horse $i$ wins, the gambler gets $o_i$ times the amount of wealth bet on $i$. All other bets are lost. This makes the wealth at the end also a random variable.

# Wealth

Let us find $S_n$, the gambler's relative wealth after $n$ races.

\begin{equation}
S_n = \prod_{i=1}^n S(X_i) \qquad S(X) = b(X)\cdot o(X)
\end{equation}

$S(X)$ is the factor by which the gambler's wealth is multiplied if horse $X$ wins.

The doubling rate of a race is 

$\let\sb_$

\begin{equation}
W(b, p) = \mathbb{E}\left[\log S(X)\right] = \sum_{k=1}^m p\sb{k} \log b\sb{k} o\sb{k}
\end{equation}

Let the race outcomes $X_1, X_2, \dots X_n$ be i.i.d and $\sim p(x)$. Wealth of a gambler using a betting strategy $b$ grows exponentially at a rate $W(b,p)$:

\begin{equation}
S_n = 2^{n W(b,p)}
\end{equation}

How can one maximize $S_n$? Maximize $W(b,p)$. 

\begin{equation}
J(b) = \sum_k p_k \log b_k o_k + \lambda \sum b_i
\end{equation}

Then we set $\frac{\partial J}{\partial b_i} = 0$, so

\begin{align*}
\frac{p_i}{b_i} + \lambda = 0  \\
b_i = -p_i / \lambda \\
\sum b_i = 1 \\
b_i = p_i
\end{align*}

The optimum double rating is given by (when $b^\star=p$)

\begin{equation}
W^\star = \sum_i p_i \log o_i - H(p)
\end{equation}