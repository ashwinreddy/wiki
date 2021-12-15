The **Boolean satisfiability problem (SAT)** is a [[search problem]] which is canonically hard. An instance of SAT looks like

$$
\overbrace{(x \lor y \lor z)}^{\text{clause}} (\underbrace{x}\_{\text{literal}} \lor \bar{y}) (y \lor \bar{z}) (z \lor \bar{x})(\bar{x} \lor \bar{y} \lor \underbrace{\bar{z}}_{\text{literal}})
$$

Satisfying truth assignment
: Assignment of `false` and `true` to each variable so that each clause is `true` (therefore the whole expression is satisfied).

Special case is [[3SAT]] or [[2SAT]].