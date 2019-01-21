Rate-distortion $R(\delta)$ depends only on the source. Roughly, $R(\delta)$ measures how many bits of information the source must output if you are willing to tolerate a distortion of at most $\delta$.

The capacity cost function $C(\beta)$ depends only on the channel. Roughly, $C(\beta)$ is how many bits of information the channel can transmit if you have a cost of $\beta$.

Shannon's theorem says one can build an encoder/decoder that achieves a performance of $\delta$ at a cost of $\beta$ iff

\begin{equation}
\boxed{R(\delta) < C(\beta)}
\end{equation}

to pervent symbols from dropping out completely.

Picture

<img src="/uploads/buffered-channel.jpg">

# Definitions of $R(\delta)$, $C(\beta)$

Src -> X -> Channel -> Y

Expected distortion

\begin{equation}
\mathbb{E}[d] = \sum p(x,y) d(x,y)
\end{equation}

\begin{equation}
\mathbb{E}[c] = \sum p(x) c(x)
\end{equation}

Expected amount of information per symbol is $I(X; Y)$

$R(\delta)$: rate-distortion fora  given src, how do you find rate-distortion for a given $\delta$?

Hook up the source to various different "test" channels s.t. $\mathbb{E}[d] \leq \delta$. Then pick the one that minimizes $I(X; Y)$. Call this minimum value $R(\delta)$.

<img src="/uploads/distortion-cost.jpg">

Given a channel, how do you find $C(\beta)$? Hook up various test sources and find the source that satisfies expected cost less than equal to beta. then pick the one that maximizes mutual information between x and y. That is c of beta. 

Previosuly we had infinite cost and 0 distortion.

# Bianry Source

Imagine a binary source that produces 1 with probability $p$ and 0 with probability $1-p$. Wlog $p \leq 1/2$. Claim:

\begin{equation}
R(\delta) = \begin{cases} H(p) - H(\delta) & 0 \leq \delta < p \\\
0 & \delta \geq p
\end{cases}
\end{equation}




