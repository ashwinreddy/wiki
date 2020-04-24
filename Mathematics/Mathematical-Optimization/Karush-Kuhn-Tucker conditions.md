The **Karush-Kuhn-Tucker (KKT) conditions** are a neccessary condition for strong duality. 

|Condition|Variables|Requires|
|:---------:|---------|--------|
|$f_i(x^\star)\leq 0$|$i=1,\dots,m$|Primal feasible|
|$h_i(x^\star)= 0$|$i=1,\dots,p$|Primal feasible|
|$\lambda_i^\star \geq 0$|$i=1, \dots, m$|Dual feasible|
|$\lambda_i^\star f_i(x^\star)=0$|$i=1,\dots,m$|Complementary slackness|
|$\nabla f_0(x^\star) + \sum_{i=1}^m \lambda_i^\star \nabla f_i(x^\star) + \sum_{i=1}^p \nu_i^\star \nabla h_i(x^\star) = 0$|||