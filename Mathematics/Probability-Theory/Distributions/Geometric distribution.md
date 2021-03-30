**Geometric distribution** represents the number of [[Bernoulli distribution]] coin flips you need until you hit heads.

$$
X \sim \mathsf{Geometric}(p) \iff \Pr(X =k ) = (1-p)^{k-1}p
$$

$$
F_X(x) = \Pr(X \leqslant x) = 1 - (1-p)^{x+1}
$$


# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$1/p$|
|[[Variance]]|$\frac{1-p}{p^2}$|