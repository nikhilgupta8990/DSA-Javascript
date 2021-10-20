package levelaverages

func depthFirstIterativeFillLevels(root *Node) [][]float64 {
	result := [][]float64{}

	if root == nil {
		return result
	}

	stack := []struct{
		Node *Node
		Index int
	}{{Node: root, Index: 0}}

	var current struct{
		Node *Node
		Index int
	}

	for len(stack) > 0 {
		// get last
		current, stack = stack[len(stack) - 1], stack[:len(stack) - 1]

		for len(result) <= current.Index {
			result = append(result, []float64{})
		}

		result[current.Index] = append(result[current.Index], current.Node.Value)

		// add last
		if current.Node.Right != nil {
			stack = append(stack, struct{
				Node *Node
				Index int
			}{Node: current.Node.Right, Index: current.Index + 1})
		}

		// add last
		if current.Node.Left != nil {
			stack = append(stack, struct{
				Node *Node
				Index int
			}{Node: current.Node.Left, Index: current.Index + 1})
		}
	}

	return result
}

func DepthFirstIterative(root *Node) []float64 {
	levels := [][]float64{}

	depthFirstRecursiveFillLevels(root, 0, &levels)

	result := []float64{}

	for _, level := range levels {
		var sum float64
		for _, value := range level {
			sum += value
		}

		average := sum / float64(len(level))
		result = append(result, average)
	}

	return result
}

