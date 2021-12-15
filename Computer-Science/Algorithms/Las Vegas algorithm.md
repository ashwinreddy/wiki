**Las Vegas algorithm** is a [[randomized algorithm]] that guarantees correctness but the runtime $t(x, r)$ is a [[random variable]]. The goal is to analyze

$$
T(n) = \max_{|x| = n} \mathbb{E}_r\left[t(x, r)\right]
$$