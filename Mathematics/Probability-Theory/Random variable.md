A **random variable (RV / r.v. / R.V.)** assigns a [[real number]] to every outcome in a [[sample space]] $\Omega$. Formally, we write it as a [[function]] $X: \Omega \to \RR$. So, they assign a discrete or continuous quantity to outcomes. 

However, we don't usually think about $X(\omega)$ directly. Instead, the r.v. annotates each possible outcome with a probability, typically in the form of a [[probability mass function]] (pmf) or [[probability density function]] (pdf). 


R.V.s are the building block of probability. 



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