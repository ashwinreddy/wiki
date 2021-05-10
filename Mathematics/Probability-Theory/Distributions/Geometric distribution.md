**Geometric distribution** represents the number of [[Bernoulli distribution]] coin flips you need until you hit heads where $p$ is the chance of getting a heads.

$$
X \sim \mathsf{Geometric}(p) \iff \Pr(X =k ) = (1-p)^{k-1}p
$$

$$
F_X(x) = \Pr(X \leqslant k) = 1 - (1-p)^{k+1}
$$


# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$1/p$|
|[[Variance]]|$\frac{1-p}{p^2}$|

* Enjoys the [[memoryless propery]]