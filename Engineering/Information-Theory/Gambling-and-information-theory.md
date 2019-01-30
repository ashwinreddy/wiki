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

\begin{gather}
\frac{p\sb{i}}{b\sb{i}} + \lambda = 0  \\\
b\sb{i} = -p\sb{i} / \lambda \\\
\sum b_i = 1 \\\
b\sb{i} = p\sb{i}
\end{gather}

The optimum double rating is given by (when $b^\star=p$)

\begin{equation}
W^\star = \sum_i p_i \log o_i - H(p)
\end{equation}

# Optimality

Now one may wonder, why doesn't the betting depend on the payouts. Suppose we have two horses, equally likely to win. One has a payout of 2 to 1 and the other 6 to 1.

In our optimal case, we would bet half our wealth on both. So we expect to get $(1)^{n/2}3^{n/2}$. If we adjust according to payout, we get $(1/2)^{n/2}(9/2)^{n/2}=(9/4)^{n/2}$, which is less.

**Theorem 2**. The optimal doubling rate is given by

\begin{equation}
W^\star = \sum_i p_i \log o_i - H(p)
\end{equation}

**Proof**.

\begin{align}
W(b,p) &= \sum p_i \log b_i o_i \\\
&= \sum p_i \log \frac{b_i}{p_i} - p_i o_i \\\
&= \sum p_i \log o_i + \sum p_i \log p_i \\\
&= \sum p_i \log o_i + \sum p_i \log p_i - D_{KL}(p \parallel b) \\\
&= \sum p_i \log o_i - H(p)
\end{align}

w/equality when $b_i = p_i$.

**Example**. 2 horses p1 and p2. Assume even odds (2-for-1). Resulting wealth after n races

\begin{gather}
S_n = 2^{nW^\star} \\\
W^\star = \sum p_i \log o_i - H(p) = 1 - H(p)
\end{gather}

50/50 chance means you always have $1.

**Example**. When odds are fair w.r.t. some distribution

\begin{equation}
\sum_i \frac{1}{o_i} = 1 \qquad r_i = 1/o_i
\end{equation}

One interpretation of $r_i$: bookie's estimate of horse $i$ winning.

\begin{align}
W(b, p) &= \sum p_i \log b_i o_i \\\
&= \sum p_i \log \left(\frac{b_i}{p_i}p_io_i\right) \\\
&= \sum p_i \log \frac{p_i}{r_i} - \sum p_i \log \frac{p_i}{b_i} \\\
&= D(p \parallel r) - D(p \parallel b)
\end{align}

When does the gambler make money? only when $b$ is "better than" bookie's $r$.

What happens when odds are $m$-for-1?

\begin{equation}
W(b, p) = D(p \parallel 1/m) - D(p \parallel b)
\end{equation}

\begin{equation}
W^\star (b, p) = \log m - H(p)
\end{equation}

\begin{equation}
\boxed{W^\star + H(p) = \log m}
\end{equation}

Allow gambler to retain some cash: $S(X) = b(X)o(X)+ b_0$

a) Fair odds: $\sum r_i = 1$. Nothing changes. Proportional betting.
b) Superfair odds the sum is less than 1
c) Subfair odds, the sum is greater than 1

**Problem** 3-for-1 odds on each horse these are fair assuming horses are equally likely to win. $p = (1/2, 1/4, 1/4)$. What is W star b star and wealth. If you put all your money in horse 1 what happens?

\begin{equation}
W(b) = \sum p_i \log 3 b_i
\end{equation}

\begin{equation}
H(p) = 3/2
\end{equation}



b star is p star.

\begin{align}
W\star &= \sum p_i \log 3 p_i \\\
&= \sum p_i \left(\log 3 + \log p_i\right) \\\
&= \sum p_i \log 3 + \sum p_i \log p_i \\\
&= \sum p_i \log 3 - H(p) \\\
&= \log 3 - 3/2
\end{align}

$(1/2)^n$ to win $3^n$


