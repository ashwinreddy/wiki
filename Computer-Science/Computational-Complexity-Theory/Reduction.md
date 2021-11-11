A **reduction** is an [[algorithm]] that transforms one problem to another. $P$ reduces to $Q$ if you can do

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