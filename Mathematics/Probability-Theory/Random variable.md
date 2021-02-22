A **random variable (RV / r.v. / R.V.)** assigns a [[real number]] to every event in a [[probability space]] $(\Omega, \mathcal{F}, \mathbb{P})$. Formally, we write it as a [[function]] $X: \Omega \to \RR$.

Random variables are the building block of probability. Simply put, they represent a discrete or continuous quantity (more technically, the outcome of an [[experiment]]) whose value is uncertain. Mechanically, the variable annotates each possible outcome with a probability, typically in the form of a [[probability mass function]] (pmf) or [[probability density function]] (pdf). 


# Technical details

We require

$$
\forall \alpha \in \RR: \\{ \omega: X(\omega) \leqslant \alpha \\} \in \mathcal{F}
$$

so that $\Pr(X \in B)$ makes sense for any $B$ we're likely to encounter.

# Discrete random variable

Discrete random variable
: A r.v. that takes countably many values

[[Probability mass function]]

# Properties

* If $X$ and $Y$ are r.v.'s then so is $X+Y$.