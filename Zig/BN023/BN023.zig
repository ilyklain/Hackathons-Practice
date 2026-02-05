// -------------------------------------
// ‣ Bun (Zig) Hackathon Challenge
// -------------------------------------
//
// Developed and Solved by: Gustavo Jaspe AKA Strawyh
// Date: 04/02/2026
//
// » Context:
// Bun is a fast, all-in-one JavaScript runtime written in Zig.
// One of its core strengths is ultra-fast I/O and string parsing.
// When handling HTTP requests, parsing headers efficiently is critical
// to maintaining low latency.
//
// » Problem:
// Write a Zig program that parses a raw HTTP header string.
//
// The system should:
//   - Take a raw string like "Content-Type: application/json\r\nConnection: keep-alive".
//   - Split it into Key-Value pairs.
//   - Focus on "Zero-copy" parsing (referencing the original string instead
//     of creating new ones).
//   - Handle the `\r\n` delimiter.
//
// » Example:
//   Input: "Host: localhost\r\nUser-Agent: Bun-Engine"
//   Result:
//     Key: "Host", Value: "localhost"
//     Key: "User-Agent", Value: "Bun-Engine"
//
// » Objective:
// Learn how Zig handles slices (`[]const u8`) and memory safety
// without a garbage collector.
//
// » Approach:
// - Iterate through the string using slices.
// - Use `std.mem.split` or manually find indices of `:` and `\r\n`.
// - Print the parsed slices.

const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();

    // Raw HTTP Header block
    const raw_headers = "Host: bun.sh\r\nContent-Type: text/plain\r\nConnection: keep-alive\r\nAccept: */*";

    try stdout.print("--- Bun High-Performance Header Parser ---\n", .{});
    try stdout.print("Raw Input:\n{s}\n\n", .{raw_headers});
    try stdout.print("Parsed Headers:\n", .{});

    // We use a simple iterator over the header lines (\r\n)
    var lines = std.mem.tokenizeSequence(u8, raw_headers, "\r\n");

    while (lines.next()) |line| {
        // For each line, find the colon position
        if (std.mem.indexOf(u8, line, ": ")) |pos| {
            // "Zero-copy" slicing: we point to the original memory
            const key = line[0..pos];
            const value = line[pos + 2 ..];

            try stdout.print("  [KEY]: \"{s}\"\n  [VAL]: \"{s}\"\n", .{ key, value });
        }
    }
}
