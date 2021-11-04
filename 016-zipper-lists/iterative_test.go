package zipperlists_test

import (
	"reflect"
	"testing"

	zipperlists "github.com/ju-popov/structy.net/016-zipper-lists"
)

func TestIterative(t *testing.T) {
	t.Parallel()

	for _, testCase := range testCases {
		testCase := testCase
		t.Run(testCase.name, func(t *testing.T) {
			t.Parallel()

			actual := zipperlists.Iterative(testCase.head1.Copy(), testCase.head2.Copy())
			if !reflect.DeepEqual(actual, testCase.expected) {
				t.Errorf("Expected result for head1: '%v' and head2: '%v' is: '%v', but the actual result is: '%v'", testCase.head1, testCase.head2, testCase.expected, actual)
			}
		})
	}
}

func benchmarkIterative(b *testing.B, testCase testCase) {
	b.Helper()

	for n := 0; n < b.N; n++ {
		zipperlists.Iterative(testCase.head1, testCase.head2)
	}
}

func BenchmarkIterative000(b *testing.B) { benchmarkIterative(b, testCases[0]) }
func BenchmarkIterative001(b *testing.B) { benchmarkIterative(b, testCases[1]) }
func BenchmarkIterative002(b *testing.B) { benchmarkIterative(b, testCases[2]) }
func BenchmarkIterative003(b *testing.B) { benchmarkIterative(b, testCases[3]) }
func BenchmarkIterative004(b *testing.B) { benchmarkIterative(b, testCases[4]) }
