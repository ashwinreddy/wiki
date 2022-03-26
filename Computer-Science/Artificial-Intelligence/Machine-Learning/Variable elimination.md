**Variable elimination** is an exact [[inference]] algorithm for [[PGM|probabilistic graphical model]]. Suppose we want to find $P(Q_1, \dots, \mid e_1, \dots )$

Eliminate hidden variables $X_i$ one by one

1. Join (multiply) all factors involving $X$
2. Sum over $X$