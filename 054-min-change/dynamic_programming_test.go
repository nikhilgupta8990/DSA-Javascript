package minchange_test

import (
	"reflect"
	"testing"

	minchange "github.com/ju-popov/structy.net/054-min-change"
)

func TestDynamicProgramming(t *testing.T) {
	t.Parallel()

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			actual := minchange.DynamicProgramming(tc.amount, tc.coins)
			if !reflect.DeepEqual(actual, tc.expected) {
				t.Errorf("Expected result for name: '%v' is: '%v', but the actual result is: '%v'", tc.name, tc.expected, actual)
			}
		})
	}
}

func benchmarkDynamicProgramming(b *testing.B, tc testCase) {
	b.Helper()

	for n := 0; n < b.N; n++ {
		minchange.DynamicProgramming(tc.amount, tc.coins)
	}
}

func BenchmarkDynamicProgramming000(b *testing.B) { benchmarkDynamicProgramming(b, testCases[0]) }
func BenchmarkDynamicProgramming001(b *testing.B) { benchmarkDynamicProgramming(b, testCases[1]) }
func BenchmarkDynamicProgramming002(b *testing.B) { benchmarkDynamicProgramming(b, testCases[2]) }
func BenchmarkDynamicProgramming003(b *testing.B) { benchmarkDynamicProgramming(b, testCases[3]) }
func BenchmarkDynamicProgramming004(b *testing.B) { benchmarkDynamicProgramming(b, testCases[4]) }
func BenchmarkDynamicProgramming005(b *testing.B) { benchmarkDynamicProgramming(b, testCases[5]) }
func BenchmarkDynamicProgramming006(b *testing.B) { benchmarkDynamicProgramming(b, testCases[6]) }
func BenchmarkDynamicProgramming007(b *testing.B) { benchmarkDynamicProgramming(b, testCases[7]) }
func BenchmarkDynamicProgramming008(b *testing.B) { benchmarkDynamicProgramming(b, testCases[8]) }
