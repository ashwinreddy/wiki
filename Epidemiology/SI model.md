The **SI model** models the spread of a disease among a population of $N$ people who are either either susceptible (S) or infected (I), which means

$$
S+I = N.
$$

The next step is to determine how to model the average number of infections per unit time to determine the [[derivative]] of $I(t)$.

$$
\frac{\text{infections}}{\text{time}} = \frac{\text{interactions}}{\text{time}} \Pr(\text{interaction between } S \text{ and } I)
$$

The probability that a random pair has one infected and one susceptible, for large $N$, is given by

$$
2\left(\frac{S}{N}\right)\left(\frac{I}{N}\right) = \frac{2}{N^2}SI
$$