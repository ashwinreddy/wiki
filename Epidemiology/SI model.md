The **SI model** models the spread of a disease among a population of $N$ people. It chooses to say that everyone is either either susceptible (S) or infected (I), which means

$$
\forall t: S(t)+I(t) = N.
$$

The next step is to determine the dynamics of this system by a [[differential equation]]. It's intuitive to think about how the number of infected people will increase over time. Some fraction of interactions will transmit the disease from an infected person to a susceptible one. The average number of infections per unit time is the [[derivative]] of $I(t)$. 

\begin{align\*}
\frac{\text{infections}}{\text{time}} &= \frac{\text{interactions}}{\text{time}}\times\frac{\text{infections}}{\text{interactions}} \\\\\
\dv{I}{t} &= \gamma \times \Pr(\text{interaction is between an } S \text{ and an } I)\times \frac{\text{infections}}{\text{interaction between an } S \text{ and an } I} \\\\\
\dv{I}{t} &= \gamma\times\frac{2}{N^2}SI\times c.
\end{align\*}

The last line is because the probability that a random pair has one infected and one susceptible, for large $N$, is given by $2\left(\frac{S}{N}\right)$ 

If we repackage the constants into $r = 2c\gamma / N^2$, then we have

$$
\begin{align} \dv{I}{t} &= rSI \\\\\
\dv{S}{t} &= -rSI \end{align}
$$

We only need to solve one equation to understand the system:

$$
\dv{I}{t} = rI(N-I)
$$
