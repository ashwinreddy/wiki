**Randomized polynomial time** is a [[complexity class]] that runs in polynomial time and gives the correct answer when it is 'NO' but only gives the correct answer with probability greater than $1/2$ when the correct answer is 'YES'.

$$
RP \subseteq NP
$$

It is a subset of [[NP]], i.e. the problem can be verified in polynomial time. Think of the algorithm $R(x)$ as $A(x, r)$ where $r$ is a result of coin flips the algorithm uses for randomness.