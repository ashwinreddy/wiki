**Shapley value** is an allocation $\psi(v)$ in a [[cooperative game]]. The axioms are

1. **Symmetry**: If $v(S \cup \\{ i\\})=v(S \cup \\{ j \\})$ for all $S$ with $i, j \not\in S$, then $\psi_i(v)=\psi_j(v)$. (??)
2. **Dummy**: A player that doesn't add value gets nothing, i.e. if $v(S \cap \\{ i\\}) = v(S)$ for all $S$, then $\psi_i(v)=0$.
3. **Efficiency**: $$\sum_{i=1}^n \psi_i(v) = v(\\{1, \dots, n\\}).$$