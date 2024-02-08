import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;

import javax.swing.*;

public class StackedBarChartExample extends JFrame {

    public StackedBarChartExample(String title) {
        super(title);

        // Create dataset
        DefaultCategoryDataset dataset = createDataset();

        // Create chart
        JFreeChart chart = ChartFactory.createStackedBarChart(
                "Sales",       // Chart title
                "Month",       // X-axis label
                "Value",       // Y-axis label
                dataset,       // Dataset
                PlotOrientation.VERTICAL,  // Orientation
                true,          // Include legend
                true,          // Include tooltips
                false          // Include URLs
        );

        // Create chart panel
        ChartPanel chartPanel = new ChartPanel(chart);
        setContentPane(chartPanel);
    }

    private DefaultCategoryDataset createDataset() {
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();

        dataset.addValue(18183, "Morgaged sales", "01-Ocak 2022");
        dataset.addValue(16203, "Morgaged sales", "01-Ocak 2023");
        dataset.addValue(19888, "Morgaged sales", "02-Şubat 2022");
        dataset.addValue(17357, "Morgaged sales", "02-Şubat 2023");
        dataset.addValue(30271, "Morgaged sales", "03-Mart 2022");
        dataset.addValue(25262, "Morgaged sales", "03-Mart 2023");
        dataset.addValue(32030, "Morgaged sales", "04-Nisan 2022");
        dataset.addValue(21769, "Morgaged sales", "04-Nisan 2023");
        dataset.addValue(29335, "Morgaged sales", "05-Mayıs 2022");
        dataset.addValue(27476, "Morgaged sales", "05-Mayıs 2023");
        dataset.addValue(40610, "Morgaged sales", "06-Haziran 2022");
        dataset.addValue(13463, "Morgaged sales", "06-Haziran 2023");
        dataset.addValue(19146, "Morgaged sales", "07-Temmuz 2022");
        dataset.addValue(14533, "Morgaged sales", "07-Temmuz 2023");
        dataset.addValue(22168, "Morgaged sales", "08-Ağustos 2022");
        dataset.addValue(16375, "Morgaged sales", "08-Ağustos 2023");
        dataset.addValue(16970, "Morgaged sales", "09-Eylül 2022");
        dataset.addValue(8446, "Morgaged sales", "09-Eylül 2023");
        dataset.addValue(13268, "Morgaged sales", "10-Ekim 2022");
        dataset.addValue(5577, "Morgaged sales", "10-Ekim 2023");
        dataset.addValue(16655, "Morgaged sales", "11-Kasım 2022");
        dataset.addValue(5245, "Morgaged sales", "11-Kasım 2023");
        dataset.addValue(21796, "Morgaged sales", "12-Aralık 2022");
        dataset.addValue(6042, "Morgaged sales", "12-Aralık 2023");

        dataset.addValue(70123, "Other Sales", "01-Ocak 2022");
        dataset.addValue(81505, "Other Sales", "01-Ocak 2023");
        dataset.addValue(77699, "Other Sales", "02-Şubat 2022");
        dataset.addValue(62674, "Other Sales", "02-Şubat 2023");
        dataset.addValue(103899, "Other Sales", "03-Mart 2022");
        dataset.addValue(80214, "Other Sales", "03-Mart 2023");
        dataset.addValue(101028, "Other Sales", "04-Nisan 2022");
        dataset.addValue(63883, "Other Sales", "04-Nisan 2023");
        dataset.addValue(93433, "Other Sales", "05-Mayıs 2022");
        dataset.addValue(85800, "Other Sales", "05-Mayıs 2023");
        dataset.addValue(109899, "Other Sales", "06-Haziran 2022");
        dataset.addValue(70173, "Other Sales", "06-Haziran 2023");
        dataset.addValue(74756, "Other Sales", "07-Temmuz 2022");
        dataset.addValue(95015, "Other Sales", "07-Temmuz 2023");
        dataset.addValue(101323, "Other Sales", "08-Ağustos 2022");
        dataset.addValue(105716, "Other Sales", "08-Ağustos 2023");
        dataset.addValue(96432, "Other Sales", "09-Eylül 2022");
        dataset.addValue(94210, "Other Sales", "09-Eylül 2023");
        dataset.addValue(89392, "Other Sales", "10-Ekim 2022");
        dataset.addValue(88184, "Other Sales", "10-Ekim 2023");
        dataset.addValue(101151, "Other Sales", "11-Kasım 2022");
        dataset.addValue(88269, "Other Sales", "11-Kasım 2023");
        dataset.addValue(186167, "Other Sales", "12-Aralık 2022");
        dataset.addValue(132535, "Other Sales", "12-Aralık 2023");

        return dataset;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            StackedBarChartExample example = new StackedBarChartExample("Stacked Bar Chart Example");
            example.setSize(800, 600);
            example.setLocationRelativeTo(null);
            example.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            example.setVisible(true);
        });
    }
}