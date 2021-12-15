A **reduction** is an [[algorithm]] that transforms one problem to another. $P$ reduces to $Q$ if you can take an instance of $P$ and then turn it into an instance of $Q$, then use a solver for $Q$, then turn the solution for $Q$ into a solution for $P$.

@startuml
: x ;
partition Reduction {
:Preprocess;
: y ;
:Algorithm for Q;
: Q(y) ;
:Postprocess;
}
:P(x);
@enduml

If $A$ reduces to $B$ and $B$ reduces to $C$ in polynomial time, then $A$ reduces to $C$.