**Variable elimination** is an exact [[inference]] algorithm for [[PGM|probabilistic graphical model]]. Suppose we want to find $P(Q_1, \dots, \mid e_1, \dots )$. The idea is to eliminate hidden variables $X_i$ one by one by joining (multiplying) all factors involving $X$ then marginalize (sum over) $X$.

1. $factors \leftarrow []$
2. **for each** $var$ **in** $\rm{O{\small RDER}}(bn.\rm{V{\small ARS}})$ **do**
    - $factors \leftarrow \left[\rm{ M{\small AKE-}F{\small ACTOR}(var, \mathbf{e}) } \mid factors\right]$
    - **if** $var$ is a hidden variable **then** $factors \leftarrow \rm{S {\small UM}-O{\small UT}}(var, factors)$