A **vector space** $\mathcal{V}$ is a [[set]] of [[vectors|vector]] you can add together and scale. 

@startuml
abstract class "Vector Space" {
    +vector add(vector a, vector b)
    +vector scale(scalar a, vector b)
}

"Set" <|-- "Vector Space"
@enduml

The addition operation is a [[binary operation]].

\begin{align\*}
+: \mathcal{V} \times \mathcal{V} &\to \mathcal{V} \\\\
(\mathbf{a}, \mathbf{b}) & \mapsto \mathbf{a} + \mathbf{b}
\end{align\*}

The multiplication operation is an external binary operation.

\begin{align\*}
\cdot: F \times \mathcal{V} &\to \mathcal{V} \\\\
(c, \mathbf{a}) & \mapsto c \cdot\mathbf{a}
\end{align\*}
