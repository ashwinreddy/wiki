The **SI model** models the spread of a disease among a population of $N$ people. It chooses to say that everyone is either either susceptible (S) or infected (I), which means

$$
\forall t: S(t)+I(t) = N.
$$

The next step is to determine the dynamics of this system by a [[differential equation]]. It's intuitive to think about how the number of infected people will increase over time. Some fraction of interactions will transmit the disease from an infected person to a susceptible one. The average number of infections per unit time is the [[derivative]] of $I(t)$. 

$$
\frac{\text{infections}}{\text{time}} = \frac{\text{interactions}}{\text{time}}\times \Pr(\text{interaction is between an } S \text{ and an } I)\times \frac{\text{infections}}{\text{interaction between an } S \text{ and an } I}
$$



$$
\dv{I}{t} = \gamma\times\frac{2}{N^2}SI\times c
$$

The probability that a random pair has one infected and one susceptible, for large $N$, is given by $2\left(\frac{S}{N}\right)\left(\frac{I}{N}\right) = \frac{2}{N^2}SI$.